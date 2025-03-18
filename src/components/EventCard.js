import '../components/style/EventCard.css';

function EventCard({title, date, location, propsBoolean}) {
    return ( 
        <div className = "eventCard">
            <h2 style={{color: propsBoolean ? 'green' : 'red'}}><span className="eventCard__title">Группа: </span>{title}</h2>
            <h2><span className="eventCard__date">Дата: </span>{date}</h2>
            <h2><span className="eventCard__location">Адресс: </span>{location}</h2>
            
        </div>
     );
}

export default EventCard;