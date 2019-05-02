<?php
/*
 * BEFORE RUNNING:
 * ---------------
 * 1. If not already done, enable the Google Sheets API
 *    and check the quota for your project at
 *    https://console.developers.google.com/apis/api/sheets
 * 2. Install the PHP client library with Composer. Check installation
 *    instructions at https://github.com/google/google-api-php-client.
 */

// Autoload Composer.
require_once __DIR__ . '/vendor/autoload.php';

$client = getClient();

$service = new Google_Service_Sheets($client);

// The ID of the spreadsheet to retrieve data from.
$spreadsheetId = '1Wjarf4FtBgMnJ4j7ssQUTbnm3LQzaUEm2NjNbVhYbzQ'; // TODO: Update placeholder value.

// The A1 notation of the values to retrieve.
$range = 'Sheet1'; // TODO: Update placeholder value.

$response = $service->spreadsheets_values->get($spreadsheetId, $range);

// TODO: Change code below to process the `response` object:
echo '<pre>', var_export($response, true), '</pre>', "\n";

function getClient()
{
    // TODO: Change placeholder below to generate authentication credentials. See
    // https://developers.google.com/sheets/quickstart/php#step_3_set_up_the_sample
    //
    // Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/drive.readonly'
    //   'https://www.googleapis.com/auth/spreadsheets'
    //   'https://www.googleapis.com/auth/spreadsheets.readonly'
    return null;
}
