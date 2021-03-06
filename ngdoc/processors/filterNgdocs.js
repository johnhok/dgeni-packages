var _ = require('lodash');

/**
 * @dgProcessor filterNgDocsProcessor
 * @description
 * Remove docs that do not contain the ngdoc tag
 */
module.exports = function filterNgDocsProcessor(log) {
  return {
    $runAfter: ['tags-parsed'],
    $runBefore: ['extracting-tags'],
    $process: function(docs) {
      return docs;
    }
  };
};
