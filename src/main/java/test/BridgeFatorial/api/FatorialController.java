package test.BridgeFatorial.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import test.BridgeFatorial.model.Fatorial;
import test.BridgeFatorial.service.FatorialService;

@RequestMapping("api/v1/fatorial")

@RestController
public class FatorialController {

    private final FatorialService fatorialService;
    
    @Autowired
    public FatorialController(FatorialService fatorialService) {
        this.fatorialService = fatorialService;
    }

    @PostMapping
    public void insertFatorial(@RequestBody Fatorial fatorial){
        fatorialService.insertFatorial(fatorial, calculateFatorial(fatorial.getValor()));
    }

    @GetMapping
    public List<Fatorial> getAllFatorial() {
        return fatorialService.getAllFatorial();
    }

    public long calculateFatorial(int valor) {
        int i = 1;
        long fact = 1;  

        for(i = 1; i <= valor; i++){    
            fact=fact*i;    
        }
        return fact;
    }
}
