const LoopEx2 = ({start,end}) => {
    console.log("start",start, "end" , end)

    const arr = []
    
    for (let i = start; i <= end; i++ ) {
     
        arr.push(<li key={i}>AAA{i}</li>)

    }

    // return 전까진 js코드 아무거나 사용해도됨
    return ( 
        <ul>
            {arr}
        </ul>
        
     );
}
 
export default LoopEx2;