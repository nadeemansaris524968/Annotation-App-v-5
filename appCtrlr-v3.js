/* UI Controller */
var UICtrlr = (function () {
    var DOMStrings = {
        container: 'container',
        anatomyListDiv: 'anatomyListDiv',
        anatomyDiv: 'anatomyDiv',
        anatomyBtn: 'anatomyBtn',
        menuRight: 'menuRight',
        btnClicked: 'btnClicked'
    };

    var onAnatomyClick = function () {

    };

    var createAnatomyList = function (anatomyList) {
        if (anatomyList.length > 0) {
            var anatomyListDiv = document.createElement('div');
            anatomyListDiv.classList.add(DOMStrings.anatomyListDiv);
            
            anatomyList.forEach(function (anatomy) {
                var anatomyBtn = document.createElement('button');
                anatomyBtn.textContent = anatomy['name'];
                anatomyBtn.id = anatomy['name'];
                anatomyBtn.classList.add('btn');
                anatomyBtn.classList.add('btn-default');
                anatomyBtn.classList.add(DOMStrings.anatomyBtn);

                var menuRight = document.createElement('div');
                menuRight.classList.add('glyphicon');
                menuRight.classList.add('glyphicon-menu-right');
                menuRight.classList.add(DOMStrings.menuRight);

                anatomyBtn.appendChild(menuRight);
                
                anatomyListDiv.appendChild(anatomyBtn);
            });

            var containerDiv = document.querySelector('.' + DOMStrings.container);
            containerDiv.appendChild(anatomyListDiv);
        }
    };

    var createSubanatomyList = function (subanatomyList) {
        console.log('Will create SubanatomyListDiv');
        console.log('Subanatomy list: /n', JSON.stringify(subanatomyList, undefined, 2));
    };

    var createRowList = function () {

    };

    return {
        createListDivs: function (anatomyList) {
            console.log('Will create AnatomyListDiv');
            createAnatomyList(anatomyList);
            console.log('Will create SubanatomyListDiv');
            console.log('Will create RowListDiv');
            console.log('Will create AddRowBtn, SaveBtn and SummaryReportDiv');
        }
    }
})(ListCtrlr);



/* App Controller */
var appCtrlr = (function () {

    return {
        init: function () {
            console.log('Application started');

            /* Data will come from the back-end */
            var anatomyList = ListCtrlr.getAnatomyList();
            UICtrlr.createListDivs(anatomyList);
        }
    }
})(ListCtrlr, UICtrlr);

appCtrlr.init();