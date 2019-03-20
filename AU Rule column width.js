((width) => {
  columns = document.querySelectorAll("#root > div > div");
  rules = columns[2];
  rules.style.width = width;

  row = rules.querySelectorAll(".list-group .list-group-item div:not(.dropdown)");
  row.forEach(el => {
      el.style.width = width;
      el.style.textOverflow = "inherit";
      el.style.overflow = "visible";
  });

  console.log("Snippet AU Column applied");    
})("600px");

/*

javascript:( 
((width) => {
  columns = document.querySelectorAll("#root > div > div");
  rules = columns[2];
  rules.style.width = width;

  row = rules.querySelectorAll(".list-group .list-group-item div:not(.dropdown)");
  row.forEach(el => {
      el.style.width = width;
      el.style.textOverflow = "inherit";
      el.style.overflow = "visible";
  });

  console.log("Snippet AU Column applied");    
})("600px")
)

*/