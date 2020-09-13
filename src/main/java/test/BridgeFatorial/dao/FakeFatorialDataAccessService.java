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
    public int insertFatorial(UUID id_fatorial, Fatorial fatorial, Long resultado) {
        DB.add(new Fatorial(id_fatorial, fatorial.getValor(), resultado));
        return 1;
    }

    @Override
    public List<Fatorial> selectAllFatoriais() {
        return DB;
    }
}
