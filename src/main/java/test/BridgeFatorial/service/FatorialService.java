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

    public int insertFatorial(Fatorial fatorial, Long resultado) {
        return fatorialDao.insertFatorial(fatorial, resultado);
    }

    public List<Fatorial> getAllFatorial() {
        return fatorialDao.selectAllFatoriais();
    }
}
