package com.lukas.JobPortal;

import com.lukas.JobPortal.dto.JobOfferDto;
import com.lukas.JobPortal.entity.JobOffer;
import com.lukas.JobPortal.mapper.JobOfferMapper;
import com.lukas.JobPortal.service.JobOfferService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(JobOfferService.class)
public class JobOfferServiceTest {

    @Autowired
    private JobOfferService jobOfferService;

    @Autowired
    private TestEntityManager entityManager;

    @MockBean
    private JobOfferMapper jobOfferMapper;

    @Test
    public void testCreateJobOffer() {
        JobOfferDto jobOfferDto = JobOfferDto.builder()
                .offerName("Junior Java developer")
                .offerDescription("Do našeho týmu na Pražském povstání hledáme talentovaného Java developera")
                .email("asd@asd.cz")
                .technologies("Java, Spring boot")
                .build();

        JobOffer jobOffer = new JobOffer();

        when(jobOfferMapper.map(any(JobOfferDto.class))).thenReturn(jobOffer);

        Long createdJobOfferId = jobOfferService.create(jobOfferDto);

        JobOffer persistedJobOffer = entityManager.find(JobOffer.class, createdJobOfferId);
        assertThat(persistedJobOffer).isNotNull();
        assertThat(persistedJobOffer.getId()).isEqualTo(createdJobOfferId);
    }
}
