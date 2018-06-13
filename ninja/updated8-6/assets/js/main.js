/*
 * jQuery File Upload Plugin JS Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global $, window */

$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        autoUpload: false,
        url: 'server/php/',
        acceptFileTypes: /(.|\/)(gif|jpe?g|png)$/i,
        maxNumberOfFiles: 10,
        // add: function(e, data) {
        //   var uploadErrors = [];
        //   var acceptFileTypes = /^image\/(gif|jpe?g|png)$/i;
        //   var limitMultiFileUploads = 5;
        //   if(data.originalFiles[0]['type'].length && !acceptFileTypes.test(data.originalFiles[0]['type'])) {
        //       uploadErrors.push('Not an accepted file type');
        //   }
        //   if(data.originalFiles[0]['size'].length && data.originalFiles[0]['size'] > 5000000) {
        //       uploadErrors.push('Filesize is too big');
        //   }
        //   if(data.originalFiles.length >=limitMultiFileUploads ) {
        //       uploadErrors.push('Exceed number of files');
        //   }
        //   if(uploadErrors.length > 0) {
        //       data.submit();
        //   } else {
        //       data.submit();
        //   }
        // },
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    if (window.location.hostname === 'blueimp.github.io') {} else {
        // Load existing files:
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: $('#fileupload').fileupload('option', 'url'),
            dataType: 'json',
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done')
                .call(this, $.Event('done'), {result: result});
        });
    }

});
