document.getElementById('main').remove();

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Corey is the champion"

it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
  console.log(newHeader)
  expect(newHeader.nodeName, "Make sure you create an <h1> with id 'victory'").eql('H1')
});
