package test.BridgeFatorial.dao;

import test.BridgeFatorial.model.Fatorial;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Repository;

@Repository("fakeDao")
public class FakeFatorialDataAccessService implements FatorialDao {

    private static List<Fatorial> DB = new ArrayList<>();

    @Override
    public Fatorial insertFatorial(UUID id_fatorial, Fatorial fatorial, String resultado) {
        Fatorial created_fatorial = new Fatorial(id_fatorial, fatorial.getValor(), resultado);
        DB.add(created_fatorial);
        return created_fatorial;
    }

    @Override
    public List<Fatorial> selectAllFatoriais() {
        return DB;
    }
}
