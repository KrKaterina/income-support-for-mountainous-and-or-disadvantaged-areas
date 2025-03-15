var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Εισοδηματική ενίσχυση ορεινών ή/και μειονεκτικών περιοχών",
      pageTitle: "Εισοδηματική ενίσχυση ορεινών ή/και μειονεκτικών περιοχών",
      infoTitle: "Πληροφορίες για την χορήγηση ετήσιας εισοδηματικής ενίσχυσης σε οικογένειες ορεινών και μειονεκτικών περιοχών.",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε αν δικαιούστε να λάβετε την χορήγηση ετήσιας εισοδηματικής ενίσχυσης σε οικογένειες ορεινών και μειονεκτικών περιοχών.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 15 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε στα πλαίσια εργασίας κατά τη διάρκεια των μεταπτυχιακών σπουδών στο Πανεπιστήμιο Μακεδονίας. ",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Income Support for Mountainous and/or Disadvantaged Areas",
      pageTitle: "Income Support for Mountainous and/or Disadvantaged Areas",
      infoTitle: "Information on the provision of annual income support to families in mountainous and disadvantaged areas.",
      subTitle1: "This questionnaire can help you determine if you are eligible to receive annual income support for families in mountainous and disadvantaged areas.",
      subTitle2: "Completing the questionnaire takes no more than 15 minutes.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created as part of coursework during postgraduate studies at the University of Macedonia.",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();