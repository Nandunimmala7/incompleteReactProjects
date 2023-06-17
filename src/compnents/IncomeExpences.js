
const IncomeExpences = () => {
    
        const styles = {
            color : 'red',
            display : 'inline-block',
            
        };
    
  return (
    <div>
        <div style={styles}>
        <h3>income</h3>
        <p>+$0.00</p>
        </div>
        <div style={{color:'green'}}>
        <h3>expenses</h3>
         <p>-$0.00</p>
        </div>
    </div>
  )
}

export default IncomeExpences