import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { fireDB } from '../../firebase/firebaseConfig';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


function MyState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }



  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    getClotheData();
    getShoesData();
    getBagData();
    getAccessoryData();
    getOrderData()

  }, []);

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    getClotheData();
    getShoesData();
    getBagData();
    getAccessoryData();
    getOrderData();
    getUserData();
  }, []);

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')


  //***** clothes item */

  const [clothes, setClothes] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add Clothe Section  **********************
  const addClothe = async () => {
    if (clothes.title == null || clothes.price == null || clothes.imageUrl == null || clothes.category == null || clothes.description == null) {
      return toast.error('Please fill all fields')
    }
    const clothesRef = collection(fireDB, "clothes")
    setLoading(true)
    try {
      await addDoc(clothesRef, clothes)
      toast.success("clothe Add successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getClotheData()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setClothes("")
  }

  const [clothe, setClothe] = useState([]);

  // ****** get Clothe
  const getClotheData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "clothes"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let clothesArray = [];
        QuerySnapshot.forEach((doc) => {
          clothesArray.push({ ...doc.data(), id: doc.id });
        });
        setClothe(clothesArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getClotheData();
  }, []);

  // Update clothe Function

  const edithandleClothes = async (item) => {
    setClothes(item); 
  }
  // update clothe
  const updateClothe = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "clothes", clothes.id), clothes);
      toast.success("Clothe Updated successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getClotheData();
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setClothes("")
  }

  const deleteClothe = async (item) => {
    setLoading(true)
    try {
      await deleteDoc(doc(fireDB, "clothes", item.id));
      toast.success('Clothe Deleted successfully')
      setLoading(false)
      getClotheData()
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }

  /** shoes */

  const [shoeses, setShoeses] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add Shoes Section  **********************
  const addShoes = async () => {
    if (shoeses.title == null || shoeses.price == null || shoeses.imageUrl == null || shoeses.category == null || shoeses.description == null) {
      return toast.error('Please fill all fields')
    }
    const shoesRef = collection(fireDB, "shoeses")
    setLoading(true)
    try {
      await addDoc(shoesRef, shoeses)
      toast.success("Shoes Add successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getShoesData()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setShoeses("")
  }

  const [shoes, setShoes] = useState([]);

  // ****** get Shoes
  const getShoesData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "shoeses"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let shoesesArray = [];
        QuerySnapshot.forEach((doc) => {
          shoesesArray.push({ ...doc.data(), id: doc.id });
        });
        setShoes(shoesesArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getShoesData();
  }, []);

  // Update Shoes Function

  const edithandleshoes = async (item) => {
    setShoeses(item); 
  }
  // update Shoes
  const updateShoes = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "shoeses", shoeses.id), shoeses);
      toast.success("Shoes Updated successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getShoesData();
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setShoeses("")
  }

  const deleteShoes = async (item) => {
    setLoading(true)
    try {
      await deleteDoc(doc(fireDB, "shoeses", item.id));
      toast.success('Shoes Deleted successfully')
      setLoading(false)
      getShoesData()
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }

  /** bags */


  const [bags, setBags] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add bags Section  **********************
  const addBag = async () => {
    if (bags.title == null || bags.price == null || bags.imageUrl == null || bags.category == null || bags.description == null) {
      return toast.error('Please fill all fields')
    }
    const bagRef = collection(fireDB, "bags")
    setLoading(true)
    try {
      await addDoc(bagRef, bags)
      toast.success("Bag Add successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getBagData()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setBags("")
  }

  const [bag, setBag] = useState([]);

  // ****** get bag
  const getBagData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "bags"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let bagsArray = [];
        QuerySnapshot.forEach((doc) => {
          bagsArray.push({ ...doc.data(), id: doc.id });
        });
        setBag(bagsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getBagData();
  }, []);

  // Update bag Function

  const edithandlebags = async (item) => {
    setBags(item); 
  }
  // update bags
  const updateBag = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "bags", bags.id), bags);
      toast.success("Bag Updated successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getBagData();
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setBags("")
  }

  const deleteBag = async (item) => {
    setLoading(true)
    try {
      await deleteDoc(doc(fireDB, "bags", item.id));
      toast.success('Bag Deleted successfully')
      setLoading(false)
      getBagData()
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }


  /* ACCESSORIES */

  const [accessories, setAccessories] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add Accessory Section  **********************
  const addAccessory = async () => {
    if (accessories.title == null || accessories.price == null || accessories.imageUrl == null || accessories.category == null || accessories.description == null) {
      return toast.error('Please fill all fields')
    }
    const accessoryRef = collection(fireDB, "accessories")
    setLoading(true)
    try {
      await addDoc(accessoryRef, accessories)
      toast.success("Accessory Add successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getAccessoryData()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setAccessories("")
  }

  const [accessory, setAccessory] = useState([]);

  // ****** get accessory
  const getAccessoryData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "accessories"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let accessoriesArray = [];
        QuerySnapshot.forEach((doc) => {
          accessoriesArray.push({ ...doc.data(), id: doc.id });
        });
        setAccessory(accessoriesArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getAccessoryData();
  }, []);

  // Update accessory Function

  const edithandleaccessories = async (item) => {
    setAccessories(item); 
  }
  // update accessory
  const updateAccessory = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "accessories", accessories.id), accessories);
      toast.success("Accessory Updated successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getAccessoryData();
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setAccessories("")
  }

  const deleteAccessory = async (item) => {
    setLoading(true)
    try {
      await deleteDoc(doc(fireDB, "accessories", item.id));
      toast.success('Accessory Deleted successfully')
      setLoading(false)
      getAccessoryData()
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }

  


  return (
    <MyContext.Provider value={{
      mode, toggleMode, loading, setLoading,order,user,
      searchkey, setSearchkey, filterType,setFilterType,
      filterPrice, setFilterPrice, clothes, setClothes, addClothe, clothe,
      edithandleClothes, updateClothe, deleteClothe, shoeses, setShoeses,
      addShoes, shoes, edithandleshoes, updateShoes, deleteShoes,
      bags, setBags, addBag, bag, edithandlebags, updateBag, deleteBag,
      accessories, setAccessories, addAccessory, accessory,
      edithandleaccessories, updateAccessory, deleteAccessory,


    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState