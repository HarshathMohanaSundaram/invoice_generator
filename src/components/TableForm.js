import React, { useEffect } from "react"
import {v4 as uuidv4} from 'uuid'

export default function TableForm({description,setDescription,quantity,setQuantity,price,setPrice,amount,setAmount,list,setList}) {
  
  const handleSubmit =(e) =>{
    e.preventDefault();
    const newItems = {
        id:uuidv4(),
        description,
        quantity,
        price,
        amount
    }
    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list,newItems])
    console.log(list);
  }  

  useEffect(()=>{
    const calAmount =(amount) =>{
        setAmount(quantity*price)
    }
    calAmount(amount)  
  },[price,quantity,amount,setAmount])

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col md:mt-16'>
                <label htmlFor='itemDescription'>Item Description</label>
                <input type="text" 
                    name="itemDescription" 
                    id="itemDescription" 
                    placeholder='Item Description' 
                    value={description} 
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
            </div>
            <div className='md:grid grid-cols-3 gap-10'>
                <div className='flex flex-col'>
                    <label htmlFor='quantity'>Item Quantity</label>
                    <input type="text" 
                        name="quantity" 
                        id="quantity" 
                        placeholder='Item Quantity' 
                        value={quantity} 
                        onChange={(e)=>{setQuantity(e.target.value)}}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='price'>Item Price</label>
                    <input type="text" 
                        name="price" 
                        id="price" 
                        placeholder='Item Price' 
                        value={price} 
                        onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='amount'>Total Amount</label>
                    <p>{amount}</p>
                </div>
            </div>
            <button className="mb-5 bg-blue-500 text-white font-bold
            py-2 px-8 rounded shadow border-2
            border-blue-500 hover:bg-transparent
            hover:text-blue-500 transistion-all duration-300" type="submit">Add Item</button>
        </form>

        {/* Table items */}
        <table width="100%" className="mb-10">
            <thead>
                <tr className='bg-gray-100 p-1'>
                    <td className='font-bold'>Item Description</td>
                    <td className='font-bold'>Quantity</td>
                    <td className='font-bold'>Price</td>
                    <td className='font-bold'>Amount</td>
                </tr>
            </thead>
            {list.map(({id,description,quantity,price,amount})=>(
                <React.Fragment key={id}>    
                    <tbody>
                        <tr>
                            <td>{description}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>{amount}</td>
                        </tr>
                    </tbody>
                </React.Fragment>
            ))}
        </table>
    </>
  )
}