// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });


const sumar = (a , b) => a + b;

// toBe - toEqual
describe("la funcion sumar", () => {
  it("Debe estar definida", () => {
    expect(sumar).toBeDefined();        //Como saber si una variable esta definida
  });
  it("Debe sumar dos numeros enviados como argumento", () => {
    expect(sumar(2,2)).toBe(4);
    expect(sumar(4,4)).toBe(8);
    expect(sumar(5,0)).toBe(5);
  })
});



describe("Pueba con objetos", ()=> {
  it("yo esero que dos objetos sean iguales", ()=>{
    expect({nombre:"jorge"}).toEqual({nombre:"jorge"});   //como saber que los objeros/array sean iguales
  });

  
  
});