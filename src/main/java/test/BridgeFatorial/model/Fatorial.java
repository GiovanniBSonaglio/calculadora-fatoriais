package test.BridgeFatorial.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Null;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;

public class Fatorial {
    @Null
    private final UUID id_fatorial;

    @NotNull(message = "Número não pode ser nulo.")
    @Min(value = 0L, message = "O valor deve ser positivo.")
    @Max(value = 807L, message = "O valor não pode ser maior que 807.")
    @Digits(integer = 3, fraction = 0, message = "Só é permitido 3 digitos para o número.")
    private final Integer valor;

    @Null
    private final String resultado;

    public Fatorial(@JsonProperty("id_fatorial") UUID id_fatorial, 
                    @JsonProperty("valor") Integer valor, 
                    @JsonProperty("resultado") String resultado) {
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

    public String getResultado() {
        return resultado;
    }
}
