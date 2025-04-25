  const btn = document.querySelector('.btn');
  const container = document.querySelector('.container');
  const container2 = document.querySelector('.container2');

  const num1 = document.querySelector('.num1');
  const num2 = document.querySelector('.num2');
  const num3 = document.querySelector('.num3');
  const num4 = document.querySelector('.num4');
  const num5 = document.querySelector('.num5');

  let num = 0;

  num1.addEventListener('click', () => {
    num1.style.background = "var(--White)";
    num1.style.color= "var(--Grey950)";
    num = 1;
  });
  
  num2.addEventListener('click', () => {
    num2.style.background = "var(--White)";
    num2.style.color= "var(--Grey950)";
    num = 2;
  })
  num3.addEventListener('click', () => {
    num3.style.background = "var(--White)";
    num3.style.color= "var(--Grey950)";
    num = 3;
  })
  num4.addEventListener('click', () => {
    num4.style.background = "var(--White)";
    num4.style.color= "var(--Grey950)";
    num = 4;
  })
  num5.addEventListener('click', () => {
    num5.style.background = "var(--White)";
    num5.style.color= "var(--Grey950)";
    num = 5;
    
  })

  
  
  btn.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.container2').style.display = 'block';
    document.getElementById('rating').innerHTML = `${num}`;
    
  })


