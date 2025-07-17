<?php
/**
 * Simple download script for Jerry Player releases
 * Place this in your web server's document root
 */

// Configuration
$releasesDir = __DIR__ . '/releases';
$allowedFiles = ['JerryPlayer.exe', 'JerryPlayer.zip', 'readme.txt', 'changelog.txt'];

// Get requested file
$file = isset($_GET['file']) ? $_GET['file'] : '';
$version = isset($_GET['version']) ? $_GET['version'] : 'latest';

// Validate inputs
if (empty($file) || !in_array($file, $allowedFiles)) {
    http_response_code(400);
    die('Invalid file requested');
}

// Sanitize version
$version = preg_replace('/[^a-zA-Z0-9.-]/', '', $version);

// Construct file path
$filePath = $releasesDir . '/' . $version . '/' . $file;

// Check if file exists
if (!file_exists($filePath) || !is_file($filePath)) {
    http_response_code(404);
    die('File not found');
}

// Log download (optional)
$logFile = __DIR__ . '/downloads.log';
$logEntry = date('Y-m-d H:i:s') . " - " . $_SERVER['REMOTE_ADDR'] . " - " . $version . "/" . $file . "\n";
file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

// Set appropriate headers
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . basename($file) . '"');
header('Content-Length: ' . filesize($filePath));
header('Cache-Control: must-revalidate');
header('Pragma: public');

// Clear any previous output
if (ob_get_level()) {
    ob_end_clean();
}

// Output the file
readfile($filePath);
exit;
?>
