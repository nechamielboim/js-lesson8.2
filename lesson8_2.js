let f=new Object()
f.name="cherry"
f.calories=110
f.price=4
f.print=function(){
    let st=" "
    for (const key of Object.keys(this)) 
    {
       if(typeof(this[key])!='function')
            st+=key+": "+this[key]+" "
     
    } 
    console.log(st)
}
const arr=[{name:"apple",calories:100,price:5,print:function(){
    let st=" "
    for (const key of Object.keys(this))
    {
       if(typeof(this[key])!='function')
           st+=key+": "+this[key]+" "
    }
    console.log(st)
 }
}
    ,{name:"orange",calories:80,price:6,print:function(){
        let st=" "
        for (const key of Object.keys(this)) 
        {
           if(typeof(this[key])!='function')
               st+=key+": "+this[key]+" "
         
        }
        console.log(st)
     } 
}
]

arr.push(f)



for (const item of arr) {
    item.print()    
}

arr[0].color="red"
for (const item of arr) {
    if("color" in item)
         item.print()    
}

let st=" "

for (item in arr[0]) {
    if(typeof(arr[0][item])!='function')
        st+=item+": "+arr[0][item]+" "
}
console.log(st);


delete(arr[1].price)
arr[1].print()
console.log("-------9-------");
function changePrice()
{
    let p=document.getElementById("p1").value
    arr[0].price=p
    arr[0].print()
}
console.log("-------10-------");
function deleteCalories()
{
    let c=document.getElementById("c1").value
    let temp=arr.filter(x=>x.calories<=c)
    for (const item of temp) {
         item.print()
        
    }
}
console.log("-------11-------");
for (const item of arr) {
    Object.defineProperty(item,"ValidPrice",{
        set(value){
           if(value>=10&&value<=100)
              item.price=value
        }
    })
}
arr[0].ValidPrice=3
arr[0].print()

console.log("-------targil 2-------");

function MessageBox(colorWrite=" ",colorBack=" ",img=" ",message={title:" ",center:" "})
{
     this.colorWrite=colorWrite
     this.colorBack=colorBack
     this.img=img
     this.message={...message}
     this.render=function()
     {
        const d=document.createElement("div")
        document.body.append(d)

        const h= document.createElement("h1")
        h.textContent=this.message.title
        d.append(h)

        const p1= document.createElement("p")
        p1.textContent=this.message.center
        d.append(p1) 

        d.style.backgroundColor=this.colorBack
        d.style.color=this.colorWrite

        const i=document.createElement("img")
        i.src=this.img
        d.append(i) 

        
     }
}

const obj={info:new MessageBox("red","pink","info.jpg"),warning:new MessageBox("yellow","red","warning.gif"),error:new MessageBox("white","black","error.png")}
let type=""
function saveDetail()
{
    type=document.getElementById("s").value
}
function saveDetails()
{
     obj[type].message.title=document.getElementById("t").value
     obj[type].message.center=document.getElementById("c").value
     obj[type].render()
}