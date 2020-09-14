package test.BridgeFatorial.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import test.BridgeFatorial.model.Fatorial;
import test.BridgeFatorial.service.FatorialService;

@RestController
@RequestMapping("api/fatorial")
@CrossOrigin("*")
public class FatorialController {

    private final FatorialService fatorialService;
    
    @Autowired
    public FatorialController(FatorialService fatorialService) {
        this.fatorialService = fatorialService;
    }

    @PostMapping
    public Fatorial insertFatorial(@RequestBody Fatorial fatorial){
        return fatorialService.insertFatorial(fatorial);
    }

    @GetMapping
    public List<Fatorial> getAllFatorial() {
        return fatorialService.getAllFatorial();
    }
}
