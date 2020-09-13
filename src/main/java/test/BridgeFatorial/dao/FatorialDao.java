package test.BridgeFatorial.dao;

import test.BridgeFatorial.model.Fatorial;

import java.util.List;
import java.util.UUID;

public interface FatorialDao {

    int insertFatorial(UUID id, Fatorial fatorial, Long resultado);

    default int insertFatorial(Fatorial fatorial, Long resultado) {
        UUID id = UUID.randomUUID();
        return insertFatorial(id, fatorial, resultado);
    }

    List<Fatorial> selectAllFatoriais();
}
