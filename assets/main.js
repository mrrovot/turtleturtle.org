$(document).ready(function() {
    var d = $("#nodeTable").DataTable({
        columnDefs: [{
            targets: [0, 1],
            visible: !1,
            searchable: !1
        }],
        order: [
            [2, "asc"]
        ],
        searching: !1,
        info: !1,
        paging: !1,
        lengthMenu: -1
    });
    getNodes(d);


})

