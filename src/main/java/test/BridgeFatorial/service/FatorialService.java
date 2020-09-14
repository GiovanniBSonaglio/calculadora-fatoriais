package test.BridgeFatorial.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import test.BridgeFatorial.dao.FatorialDao;
import test.BridgeFatorial.model.Fatorial;

@Service
public class FatorialService {

    private final FatorialDao fatorialDao;

    @Autowired
    public FatorialService(@Qualifier("fakeDao") FatorialDao fatorialDao) {
        this.fatorialDao = fatorialDao;
    }

    public Fatorial insertFatorial(Fatorial fatorial) {
        return fatorialDao.insertFatorial(fatorial, calculateFactorial(fatorial.getValor()));
    }

    public List<Fatorial> getAllFatorial() {
        return fatorialDao.selectAllFatoriais();
    }

    static String calculateFactorial(int n) 
    { 
        int res[] = new int[2000]; 
  
        res[0] = 1; 
        int res_size = 1; 

        for (int x = 2; x <= n; x++) 
            res_size = multiply(x, res, res_size); 
        
       return buildString(res, res_size);
    } 

    static String buildString(int res[], int res_size)
    {   
        if(res_size <= 9){
            StringBuilder sb = new StringBuilder(res.length);
            for (int i = res_size - 1; i >= 0; i--){
                
                if( (i + 1) % 3 == 0 && (i + 1) < res_size){
                    sb.append('.');    
                }

                sb.append(res[i]);
            }
            return sb.toString();
        }else{
            StringBuilder sb = new StringBuilder(7);
            for (int i = res_size - 1; i >= res_size - 4; i--){
                sb.append(res[i]);

                if(i == res_size - 1){
                    sb.append('.');
                }
            }
            sb.append('E');
            sb.append(res_size);
            return sb.toString();
        }
    }
      
    static int multiply(int x, int res[], int res_size) 
    { 
        int carry = 0;
  
        for (int i = 0; i < res_size; i++) 
        { 
            int prod = res[i] * x + carry; 
            res[i] = prod % 10;
            carry = prod/10;
        } 
        while (carry!=0) 
        { 
            res[res_size] = carry % 10; 
            carry = carry / 10; 
            res_size++; 
        } 
        return res_size; 
    }
}
