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
        rowListDiv: 'rowListDiv',
        rowDiv: 'rowDiv',
        freeTextID: 'freeText_',
        checkBoxDiv: 'checkBoxDiv',
        checkBoxID: 'checkBox_'
    };

    var onAnatomyClick = function (e) {
        var anatomyBtn = e.target;

        /* Remove btnClicked class from all btns with class */
        var anatomyBtns = $('.' + DOMStrings.anatomyBtn);
        for (var i = 0; i < anatomyBtns.length; i++) {
            anatomyBtns[i].classList.remove(DOMStrings.btnClicked);
        }
        /* Add btnClicked class to self */
        anatomyBtn.classList.add(DOMStrings.btnClicked);

        /* createSubanatomyList */
        var subanatomyList = ListCtrlr.getSubanatomyListFor(anatomyBtn.id);
        createSubanatomyListDiv(subanatomyList);
    };

    var onSubanatomyClick = function (e) {
        var subanatomyBtn = e.target;

        var subanatomyBtns = $('.' + DOMStrings.subanatomyBtn);
        for (var i = 0; i < subanatomyBtns.length; i++) {
            subanatomyBtns[i].classList.remove(DOMStrings.btnClicked);
        }
        subanatomyBtn.classList.add(DOMStrings.btnClicked);

        /* Grab anatomy name from anatomyBtn in anatomyListDiv */
        var anatomy = $('div[class="anatomyListDiv"] :button[class*="btnClicked"]').attr('id');
        var subanatomy = subanatomyBtn.id;
        /* createRowList */
        var findings = ListCtrlr.getFindingsFor(anatomy, subanatomy);
        createRowListDiv(findings);
    };

    var createAnatomyListDiv = function (anatomyList) {
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

    /* Called when anatomyBtn in anatomyListDiv is clicked */
    var createSubanatomyListDiv = function (subanatomyList) {
        if (subanatomyList.length > 0) {
            /* Delete previous subanatomyListDiv $ rowListDiv */
            $('.' + DOMStrings.subanatomyListDiv).remove();
            $('.' + DOMStrings.rowListDiv).remove();

            var subanatomyListDiv = document.createElement('div');
            subanatomyListDiv.classList.add(DOMStrings.subanatomyListDiv);

            subanatomyList.forEach(function (subanatomy) {
                var subanatomyBtn = document.createElement('button');
                subanatomyBtn.textContent = subanatomy['name'];
                subanatomyBtn.id = subanatomy['name'];
                subanatomyBtn.classList.add('btn');
                subanatomyBtn.classList.add('btn-default');
                subanatomyBtn.classList.add(DOMStrings.subanatomyBtn);
                /* Click will create respective subanatomy's Findings */
                subanatomyBtn.addEventListener('click', onSubanatomyClick);

                subanatomyListDiv.appendChild(subanatomyBtn);
            });

            var containerDiv = document.querySelector('.' + DOMStrings.container);
            containerDiv.appendChild(subanatomyListDiv);
        }
    };

    var createRowListDiv = function (findings) {
        if (findings.length > 0) {
            /* Delete previous rowListDiv */
            $('.' + DOMStrings.rowListDiv).remove();

            var rowListDiv = document.createElement('div');
            rowListDiv.classList.add(DOMStrings.rowListDiv);
            for (var i = 0; i < 3; i++) {
                /* Create rowDiv */
                var rowDiv = document.createElement('div');
                rowDiv.classList.add(DOMStrings.rowDiv);

                /* Create free text area */
                var freeText = document.createElement('textarea');
                freeText.id = `${DOMStrings.freeTextID + i}`;
                freeText.style.cssFloat = 'left';

                /* Create positiveNegativeCheck */
                var checkBoxDiv = document.createElement('div');
                checkBoxDiv.classList.add(DOMStrings.checkBoxDiv);

                var checkBox = document.createElement('input');
                checkBox.type = 'checkbox';
                checkBox.id = `${DOMStrings.checkBoxID + i}`;
                checkBox.style.cssFloat = 'left';

                var label = document.createElement('label');
                label.htmlFor = `${DOMStrings.checkBoxID + i}`;
                label.style.cssFloat = 'left';
                label.appendChild(document.createTextNode('Negative'));

                checkBoxDiv.appendChild(checkBox);
                checkBoxDiv.appendChild(label);

                /* Create findingsDropdown */

                rowDiv.appendChild(freeText);
                rowDiv.appendChild(checkBoxDiv);

                rowListDiv.appendChild(rowDiv);
            }
            /* Insert in to DOM */
            var containerDiv = document.querySelector('.' + DOMStrings.container);
            containerDiv.appendChild(rowListDiv);
        }
    };

    return {
        createListDivs: function (anatomyList) {
            console.log('Create AnatomyListDiv');
            createAnatomyListDiv(anatomyList);
        }
    };
})(ListCtrlr);



/* App Controller */
var appCtrlr = (function () {

    return {
        init: function () {
            console.log('Application started');

            /* UI generation point */
            var anatomyList = ListCtrlr.getAnatomyList();
            UICtrlr.createListDivs(anatomyList);
        }
    }
})(ListCtrlr, UICtrlr);

appCtrlr.init();