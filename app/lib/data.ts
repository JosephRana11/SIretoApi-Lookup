import axios from 'axios';
import { client_id, client_password } from '@/auth-cred';
import { Productdata } from '../components/search-bar';


export async function fetchProduct(code: string)  : Promise<Productdata> {
        try {
            const response = await axios.get(`https://eximcode.sireto.dev/codes/lookup?code=${code}&document=hs_code`, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Basic ${Buffer.from(`${client_id}:${client_password}`).toString('base64')}`
                }
            });
            console.log(response.data);
            if (response === null) {
                return {
                    'code' : '404',
                    'description' : 'not found' 
                }
            }
            else{
                return{
                  'code' : response.data.code ,
                  'description' : response.data.description,   
                }
            }
        } catch (error) {
            console.error(error);
            throw error;
        }

}
