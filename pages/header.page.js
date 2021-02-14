class HeaderPage {

    get navBarButton() {
        return $('body > div.row > div > nav > button')
    }

    get homeLink() {
        return $('#navbarSupportedContent > ul > li.nav-item.active > a')
    }

    get linkLink() {
        return $('#navbarSupportedContent > ul > li:nth-child(2) > a')
    }

    get heroFactsLink() {
        return $('#navbarDropdown')
    }

    get wolverineOption() {
        return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)')
    }

    get spiderManOption() {
        return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)')
    }

    get logOutLink() {
        return $('#navbarSupportedContent > ul > li:nth-child(4) > a')
    }

    get searchField() {
        return $('#search-box')
    }

    get searchButton() {
        return $('#search-form > button')
    }

    //Wolverine Modal
    get wolverineModalWindow() {
        return $('#wolverineModal > div > div')
    }

    get wolverineModalTitleText() {
        return $('#wolverineModalLabel')
    }

    get wolverineModalContentText() {
        return $('#wolverineModal > div > div > div.modal-body')
    }

    get wolverineModalCloseButton() {
        return $('#wolverineModal > div > div > div.modal-footer > button')
    }

    //Spider-Man Modal
    get spiderManModalWindow() {
        return $('#spidermanModal > div > div')
    }

    get spiderManModalTitleText() {
        return $('#spidermanModalLabel')
    }

    get spiderManModalContentText() {
        return $('#spidermanModal > div > div > div.modal-body')
    }

    get spiderManModalCloseButton() {
        return $('#spidermanModal > div > div > div.modal-footer > button')
    }

}

module.exports = new HeaderPage;