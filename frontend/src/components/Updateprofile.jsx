import React from 'react'

function Updateprofile() {
    const [fields, setFields] = useState({
        image:null,
        companyName: "",
        companyMvda: "",
        timeZone:"",
        streetAddress: "",
        suiteApt: "",
        city: "",
        province: "",
        postalCode: "",
        country: "",
        phone: "",
        fax: "",
        mobile: "",
        email: "",
        website:"",
        tax:"",
        rin:"",
        licenseTransferFee:"",
        newPlateFee:"",
        renewalFee:"",
        isSequentailStackChecked:false,
        nextSaleInvoice:"",
        nextPorchaseInvoice:"",
        nextWorkOrder:"",
        serviceRate:"",
        financeInterstRate:"",
        autoclosedeal:""

      });
      const handleFieldChange = (name) => (e) => {
        setFields({
          ...fields,
          [name]: e.target.value
        });
      };
      const handleSubmit=async(event)=>{
        try {
          event.preventDefault()
        console.log('im handle update function',fields);
        const res= await axios.put(`http://localhost:5002/update/${id}`,fields)
        console.log(res);
        } catch (error) {
          console.log('error while api calling the errr is ',error);
        }
      }
    const fetchdata=async()=>{
        try {
         let response =await axios.get(`http://localhost:5002/readuser/${id}`)
         console.log(response.data);
         return setFields({
            firstname:response.data.firstname,
            lastname:response.data.lastname,
            position:response.data.position,
            serialnumber:response.data.serialnumber,
            phone:response.data.phone,
            mobile:response.data.mobile,
            email:response.data.email,
            style: response.data.style,
            approver: response.data.approver,
            dealtype: response.data.dealtype,
           
          })
     
        } catch (error) {
         console.error('error:', error);
            console.error('error.name:', error.name);
            console.error('error.stack:', error.stack);
            console.error('error.code:', error.code);
        }
       }
    useEffect(()=>{
        fetchdata()
      },[])
    
  return (
    <div>
      
    </div>
  )
}

export default Updateprofile
