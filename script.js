  const btn = document.querySelector('.btn');
  const container = document.querySelector('.container');
  const container2 = document.querySelector('.container2');
  const all = document.querySelectorAll('.num');

  let num = 0;

  all.forEach(every =>{
    every.addEventListener('click', () =>{
      document.querySelector('.selected')?.classList.remove('selected');
      every.classList.add('selected');
      num = parseInt(document.querySelector('.selected').textContent);
    })
  }
  )


  btn.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.container2').style.display = 'block';
    document.getElementById('rating').innerHTML = `${num}`;
    
  })


