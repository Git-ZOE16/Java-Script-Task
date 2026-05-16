const order ={
    status: "pending",
    
  }
  
if(order.status === "pending"){
    console.log("processing");
    }
else if(order.status === "shipped"){
    console.log("Shipped");
}

else console.log("Delivered")
