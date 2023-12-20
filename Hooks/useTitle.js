const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Online Doctor`;
    },[title])
}
export default useTitle;