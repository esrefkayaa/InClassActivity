var programmingLanguages = ["PHP", "JavaScript", "AppleScript", "Perl", "ActionScript", "Python", "Java", "C++", "C#", "Ruby", "Go", "ASP", "Swift", "Rust", "TypeScript", "Kotlin", "MATLAB", "R", "Lisp", "Lua", "Haskell"]


$(document).ready(function () {
    $("#birthDate").datepicker();

    $("#programLan").autocomplete({
        source: programmingLanguages
    });
});