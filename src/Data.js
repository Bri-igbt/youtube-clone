export const API_KEY = 'AIzaSyA0dtR5Dee07Sbwnh9-OsX2gfn8k_L25pU';

export  const value_converter = (value) => {
    if (value >= 1000000) 
    {
        return Math.floor(value/1000000) + "M"
    }
    else if (value >= 1000) 
    {
        return Math.floor(value/1000) + "K"
    }
    else {
        return value;
    }   
} 


