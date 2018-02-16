/* UI Controller */
var UICtrlr = (function () {
    var DOMStrings = {
        container: 'container',
        anatomyListDiv: 'anatomyListDiv',
        subanatomyListDiv: 'subanatomyListDiv',
        anatomyDiv: 'anatomyDiv',
        btnClicked: 'btnClicked',
        anatomyBtn: 'anatomyBtn',
        subanatomyBtn: 'subanatomyBtn',
        menuRight: 'menuRight',
        btnClicked: 'btnClicked'
    };

    var onAnatomyClick = function (e) {
        var anatomyBtn = e.target;

        /* Remove btnClicked class from all btns with class */
        var anatomyBtns = $('.'+DOMStrings.anatomyBtn);
        for(var i = 0; i < anatomyBtns.length; i++) {
            anatomyBtns[i].classList.remove(DOMStrings.btnClicked);
        }
        /* Add btnClicked class to self */
        anatomyBtn.classList.add(DOMStrings.btnClicked);
        
        var subanatomyList = ListCtrlr.getSubanatomyList(anatomyBtn.id);
        createSubanatomyList(subanatomyList);
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
                /* Click will create respective anatomy's SubanatomyList */
                anatomyBtn.addEventListener('click', onAnatomyClick);

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
        if (subanatomyList.length > 0) {
            /* Delete previous subanatomyListDiv */
            $('.'+DOMStrings.subanatomyListDiv).remove();
            var subanatomyListDiv = document.createElement('div');
            subanatomyListDiv.classList.add(DOMStrings.subanatomyListDiv);

            subanatomyList.forEach(function (subanatomy) {
                var subanatomyBtn = document.createElement('button');
                subanatomyBtn.textContent = subanatomy['name'];
                subanatomyBtn.id = subanatomy['name'];
                subanatomyBtn.classList.add('btn');
                subanatomyBtn.classList.add('btn-default');
                subanatomyBtn.classList.add(DOMStrings.subanatomyBtn);

                subanatomyListDiv.appendChild(subanatomyBtn);
            });

            var containerDiv = document.querySelector('.' + DOMStrings.container);
            containerDiv.appendChild(subanatomyListDiv);
        }
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