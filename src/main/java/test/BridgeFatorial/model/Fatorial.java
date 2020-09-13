package test.BridgeFatorial.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.lang.NonNull;

public class Fatorial {
    @NonNull
    private final UUID id_fatorial;
    @NonNull
    private final Integer valor;
    @NonNull
    private final Long resultado;

    public Fatorial(@JsonProperty("id_fatorial") UUID id_fatorial, 
                    @JsonProperty("valor") Integer valor, 
                    @JsonProperty("resultado") Long resultado) {
        this.id_fatorial = id_fatorial;
        this.valor = valor;
        this.resultado = resultado;
    }

    public UUID getIdFatorial() {
        return id_fatorial;
    }

    public Integer getValor() {
        return valor;
    }

    public Long getResultado() {
        return resultado;
    }
}
