const LoopEx = () => {

    const arr = [1,2,3,4,5,6]
    const result=  arr.map((ele, idx)=>{
        
        if(ele % 2 === 0) {
            return <li key = {idx}>{ele}</li>
        }
        
    })

    return ( 
        <>
        <ul>
            
            {/* {arr.map((ele ,idx) => <li key={idx}>AAA</li>)}  */}
            {/* 이 코드는 {arr.map((ele ,idx) => <li key={idx}>AAA</li>)} 표현식임
            
                화면에는 결과가 제대로 나오는거같지만 실제로는 unique key warning이 발생함
                
               반복문에서 이 Warning: Each child in a list should have a unique "key" prop. 나오면 key값을 주면됨

            */}
            
            {result}
          
        </ul>
        <hr/>

        {/* <ul>
            {arr.map((ele ,idx) => <li key={idx}>AAA</li>)} 
        </ul> */}
        
        </>
     );
}
 
export default LoopEx;