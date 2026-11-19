const titulo = document.querySelector('h1');
const itens  = document.querySelectorAll('.item');
botao.addEventListener('click', () => {
  contador++;
  placar.textContent = contador;
});
<style>
  .box { text-align: center; font-family: system-ui }
  #n { font-size: 44px; font-weight: 700; color: #5C6BC0 }
  button { padding: .5em 1.2em; font-size: 16px }
</style>
<div class="box">
  <div id="n">0</div>
  <button id="add">Cliquei!</button>
</div>
<script>
  let cont = 0;
  const n = document.querySelector('#n');
  document.querySelector('#add')
    .addEventListener('click', () => n.textContent = ++cont);
</script>
<style>
  ul { list-style: none; padding: 0; font-family: system-ui }
  li { padding: 8px 12px; border: 1px solid #ddd;
       border-radius: 6px; margin: 4px 0; cursor: pointer }
  li.ativo { background: #5C6BC0; color: #fff }
</style>
<ul id="lista">
  <li>HTML</li><li>CSS</li><li>JavaScript</li>
</ul>
<script>
  // um único listener no <ul> atende todos os <li>
  document.querySelector('#lista')
    .addEventListener('click', e => {
      if (e.target.tagName === 'LI')
        e.target.classList.toggle('ativo');
    });
if (!email.validity.valid) {
  email.setCustomValidity('E-mail inválido');
}
  <style>
  input { padding: 8px; width: 100%; box-sizing: border-box;
          border: 2px solid #ccc; border-radius: 6px }
  input.ok { border-color: #28a745 }
  input.erro { border-color: #e53935 }
  p { font-family: system-ui; font-size: 14px }
</style>
<input id="email" type="email" placeholder="voce@exemplo.com">
<p id="msg">Digite um e-mail…</p>
<script>
  const email = document.querySelector('#email');
  const msg = document.querySelector('#msg');
  email.addEventListener('input', () => {
    const ok = email.value && email.validity.valid;
    email.className = email.value ? (ok ? 'ok' : 'erro') : '';
    msg.textContent = !email.value ? 'Digite um e-mail…'
      : ok ? '✔ E-mail válido' : '✖ E-mail inválido';
  });
</script>
</script>
