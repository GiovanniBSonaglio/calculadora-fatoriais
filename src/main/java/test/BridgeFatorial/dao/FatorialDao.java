package test.BridgeFatorial.dao;

import test.BridgeFatorial.model.Fatorial;

import java.util.List;
import java.util.UUID;

public interface FatorialDao {

    Fatorial insertFatorial(UUID id, Fatorial fatorial, String resultado);

    default Fatorial insertFatorial(Fatorial fatorial, String resultado) {
        UUID id = UUID.randomUUID();
        return insertFatorial(id, fatorial, resultado);
    }

    List<Fatorial> selectAllFatoriais();
}
