function BorderComp({ children }) {
    return (  
        <div style={{border: '2px solid #000', padding: '16px'}}>
            {children}
        </div>
    );
}

export default BorderComp;