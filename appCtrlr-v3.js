/* UI Controller */
var UICtrlr = (function() {

    return {
        createDivs: function (data) {
            console.log('Will create AnatomyListDiv');
            console.log('Will create SubanatomyListDiv');
            console.log('Will create RowListDiv');
            console.log('Will create AddRowBtn, SaveBtn and SummaryReportDiv');
        }
    }
})();



/* App Controller */
var appCtrlr = (function() {

    return {
        init: function () {
            console.log('Application started');
            
            /* Data will come from the back-end */
            var data = 'some data';
            UICtrlr.createDivs(data);
        }
    }
})(SearchCtrlr, UICtrlr);

appCtrlr.init();