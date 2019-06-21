/* 
Some site use subdomain as a section
check what the subdomain is and report
*/ 

console.clear();

console.log("Ad Utility Subdomain as section Check \nURL:", window.location.hostname);

let parts = window.location.hostname.split(".");
parts.forEach((p, i)=>{
    console.log(i + ":", p)
})
parts.splice(parts.length - 2, 2);
let section = parts.join(".");

console.log("FD Subdomain > Section: section ", section);

if (section && "www" !== section) {
    console.log("This is not the www domain\nNeed to overide the request parameters");
        
}
