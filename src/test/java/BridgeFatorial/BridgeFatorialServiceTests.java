package BridgeFatorial;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import test.BridgeFatorial.dao.FatorialDao;
import test.BridgeFatorial.model.Fatorial;
import test.BridgeFatorial.service.FatorialService;

import java.util.UUID;

import org.junit.Test;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class BridgeFatorialServiceTests {
	@Autowired
	private FatorialService service;

	@MockBean
	private FatorialDao repository;
	
	@Test
	public void getAllFatorialTest() {
		when(repository.selectAllFatoriais()).thenReturn(Stream
				.of(new Fatorial(UUID.randomUUID(), 1, "1"), new Fatorial(UUID.randomUUID(), 2, "2")).collect(Collectors.toList()));
		assertEquals(3, service.getAllFatorial().size());
	}

	@Test
	public void insertFatorialTest() {
		Fatorial fatorial = new Fatorial(UUID.randomUUID(), 1, "1");
		when(repository.insertFatorial(fatorial, "1")).thenReturn(fatorial);

		assertEquals(fatorial, service.insertFatorial(fatorial));
	}

}
