
let container = document.getElementById("container");
let datas = [
  {
    "id": 1,
    "firstName": "Alisher",
    "lastName": "Navoiy",
    "age": 28,
    "email": "alisher@example.com",
    "city": "Tashkent"
  },
  {
    "id": 2,
    "firstName": "Zuhra",
    "lastName": "Karimova",
    "age": 24,
    "email": "zuhra.k@example.com",
    "city": "Samarkand"
  },
  {
    "id": 3,
    "firstName": "Bekzod",
    "lastName": "Tursunov",
    "age": 31,
    "email": "bekzod31@example.com",
    "city": "Bukhara"
  },
  {
    "id": 4,
    "firstName": "Laylo",
    "lastName": "Usmonova",
    "age": 22,
    "email": "laylo.u@example.com",
    "city": "Fergana"
  },
  {
    "id": 5,
    "firstName": "Jasur",
    "lastName": "Aliyev",
    "age": 35,
    "email": "jasur_a@example.com",
    "city": "Namangan"
  },
  {
    "id": 6,
    "firstName": "Madina",
    "lastName": "Sodiqova",
    "age": 27,
    "email": "madina.s@example.com",
    "city": "Khiva"
  },
  {
    "id": 7,
    "firstName": "Sardor",
    "lastName": "Rashidov",
    "age": 29,
    "email": "sardor.r@example.com",
    "city": "Andijan"
  },
  {
    "id": 8,
    "firstName": "Guli",
    "lastName": "Ahmedova",
    "age": 26,
    "email": "guli.ah@example.com",
    "city": "Termez"
  },
  {
    "id": 9,
    "firstName": "Otabek",
    "lastName": "Hoshimov",
    "age": 33,
    "email": "otabek.h@example.com",
    "city": "Jizzakh"
  },
  {
    "id": 10,
    "firstName": "Nigora",
    "lastName": "Qosimova",
    "age": 25,
    "email": "nigora.q@example.com",
    "city": "Karshi"
  },
 
]
let Cards = () =>{
    let Card = datas.map((el) => `
    <div class="cards" key ={el.id}>
    <img src="https://picsum.photos/200/300?random=${el.id} " alt="rasm">
    <h2 class="titele">${el.firstName}</h2>
    <h3 class="titele">${el.lastName}</h3>
    <p class="age">${el.age}</p>
    <a href="#">${el.email}</a>
    <p class="city">${el.city}</p>
</div>
 `).join("");
    container.innerHTML = Card;
}
 Cards();