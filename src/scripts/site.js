$(document).ready(function() {
    loadPage("home.html");
    loadIndex();
})

function loadPage(file_name) {
    // Load the Content of the HTML Page to the site container
    console.log(file_name);
    $.get(`./content/${file_name}`, function(data) {
        $('#page-content').html(data);
    }, 'html');
}

function loadIndex() {
    $.get('./page-index.json', function(data) {
        let menu = "";
        for (const [key, value] of Object.entries(data)) {
            let item = `<li class="nav-item"><a class="nav-link" onclick="loadPage('${value}')">${key}</a></li>`
            menu += item
        }
        $('#nav-list').html(menu);
    }, 'json')
}