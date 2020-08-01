import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteContent from './SiteContent';
import Button from './Button';
import { useData } from './DataContext';
import Spinner from './Spinner';
import DetailsList from './DetailsList';
import DetailsLayout from './DetailsLayout';
import DetailsPanel from './DetailsPanel';
import Flag from './Flag';

export default function DetailsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.match.params.code]);

  const { loading, findCountryByCode } = useData();
  const details = findCountryByCode(props.match.params.code);
  let borderCountries = [];
  if (details) {
    borderCountries = details.borders.map(findCountryByCode);
  }
  return (
    <SiteContent>
      <Button as={Link} to="/" spacedOut>
        &larr; Back
      </Button>
      {loading && <Spinner />}
      {details && (
        <DetailsLayout>
          <Flag src={details.flag} alt={`The flag of ${details.name}`} />
          <DetailsPanel>
            <h2>{details.name}</h2>
            <DetailsList>
              <dt>Native name:</dt>
              <dd>{details.nativeName}</dd>
              <br />
              <dt>Population:</dt>
              <dd>{details.population.toLocaleString()}</dd>
              <br />
              <dt>Region:</dt>
              <dd>{details.region}</dd>
              <br />
              <dt>Sub-Region:</dt>
              <dd>{details.subregion}</dd>
              <br />
              <dt>Capital:</dt>
              <dd>{details.capital}</dd>
            </DetailsList>
            <DetailsList>
              <dt>Top Level Domain:</dt>
              <dd>{details.topLevelDomain}</dd>
              <br />
              <dt>
                {details.currencies.length === 1 ? 'Currency' : 'Currencies'}
              </dt>
              <dd>
                {details.currencies
                  .map(currency => `${currency.name} (${currency.symbol})`)
                  .join(', ')}
              </dd>
              <br />
              <dt>
                {details.languages.length === 1 ? 'Language' : 'Languages'}
              </dt>
              <dd>
                {details.languages.map(language => language.name).join(', ')}
              </dd>
            </DetailsList>
            {borderCountries.length > 0 && <h3>Border countries</h3>}
            {borderCountries.length === 0 && <p>No bordering countries</p>}
            {borderCountries.map(borderCountry => (
              <Button
                key={borderCountry.name}
                as={Link}
                to={`/country/${borderCountry.alpha3Code}`}
              >
                {borderCountry.name}
              </Button>
            ))}
          </DetailsPanel>
        </DetailsLayout>
      )}
    </SiteContent>
  );
}
