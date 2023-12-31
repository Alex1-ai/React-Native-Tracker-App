import { useState, useEffect } from 'react'
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location'


export default (shouldTrack, callback) => {
    // console.log(shouldTrack)
    const [err, setErr] = useState(null)
    // const [ subscriber, setSubscriber ] = useState(null)
    
    useEffect(()=>{
        let subscriber;
        const startWatching = async ()=>{
            try{
                // await requestBackgroundPermissionsAsync()
                await requestForegroundPermissionsAsync()
                subscriber =  await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },  callback)
                // setSubscriber(subs)
                
    
    
            }catch(e){
                setErr(e)
    
            }
        }
    
        if(shouldTrack){
            startWatching()

        }else{
            // stop watching
            if(subscriber){
                subscriber?.remove()

            }
            
            // setSubscriber(null)
            subscriber = null
        }

        return () =>{
            if(subscriber){
                subscriber.remove()
            }
        }
        
    },[shouldTrack, callback])

    return [err]

}