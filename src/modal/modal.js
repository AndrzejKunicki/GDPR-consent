import './modal.css';
import refs from './refs.js';

refs.form.addEventListener('submit', submitForm);
refs.form.addEventListener('click', addChecked);

const urlVedorList =
  'https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json';

modalOpen();

function fetchApi() {
  fetch(urlVedorList)
    .then(res => res.json())
    .then(renderList);
}

function modalOpen() {
  if (!document.cookie) {
    fetchApi();
  }
}

function renderList({ vendors }) {
  Object.values(vendors).map(({ name, policyUrl, id }) => {
    refs.list.insertAdjacentHTML(
      'afterbegin',
      `<li>
        <label class="label">
        <input type="checkbox" id=${id} name="input" value="${name}">
        <div class="input-item">
            <h2>${name}</h2>
            <a href="${policyUrl}">${policyUrl}</a>
        </div>
          </label>
        </li>`,
    );
  });
  refs.modal.classList.remove('is-hidden');
  refs.body.classList.add('modal__open');
  refs.content.classList.add('blur');
}

function submitForm(e) {
  e.preventDefault();

  const data = {
    decision: '',
    listPartners: [],
  };

  const currentDecision = e.submitter.name;
  data.decision = currentDecision;

  if (currentDecision === 'Accept') {
    const checkedInputs = document.querySelectorAll('[checked=true]');
    const checkedList = Array.from(checkedInputs);

    checkedList.map(item => {
      data.listPartners.push(item.defaultValue);
    });
  }

  const stringCookie = `${JSON.stringify(data)}; max-age=86400`;
  document.cookie = stringCookie;

  refs.modal.classList.add('is-hidden');
  refs.body.classList.remove('modal__open');
  refs.content.classList.remove('blur');
}

function addChecked(e) {
  if (e.target.nodeName !== 'INPUT') {
    return;
  }
  e.target.setAttribute('checked', 'true');
}
