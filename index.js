console.log('bobbyhadz.com');

// 👇️ find the first selected checkbox
function findFirstSelectedCheckbox(checkboxes) {
  return Array.from(checkboxes).find(
    checkbox => checkbox.checked,
  );
}

// 👇️ get an array of all selected checkboxes
function findAllSelectedCheckboxes(checkboxes) {
  return Array.from(checkboxes).filter(
    checkbox => checkbox.checked,
  );
}

// 👇️ check if at least one checkbox is checked
function atLeastOneCheckboxChecked(checkboxes) {
  return Array.from(checkboxes).some(
    checkbox => checkbox.checked,
  );
}

const form = document.getElementById('fruit-form');

const checkboxes = document.querySelectorAll(
  'input[type="checkbox"]',
);

const validationMessage = document.getElementById(
  'validation-message',
);

// 👇️ check if at least one checkbox is checked when
// submitting the form
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!atLeastOneCheckboxChecked(checkboxes)) {
    console.log('None of the checkboxes are checked');

    validationMessage.innerHTML =
      'At least once checkbox must be checked';
    return;
  }

  validationMessage.innerHTML = 'Form submitted successfully';

  console.log('At least one checkbox is checked');
  console.log(findFirstSelectedCheckbox(checkboxes));

  console.log(findAllSelectedCheckboxes(checkboxes));
  console.log(findAllSelectedCheckboxes(checkboxes).length);
});
