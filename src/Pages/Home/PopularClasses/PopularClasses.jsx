import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CardLoading from "../../../Components/CardLoading/CardLoading";
import Button from "../../../Components/Button/Button";

const PopularClasses = ({
  classes,
  loading,
  totalPopularClasses,
  onAllCourse,
}) => {
  return (
    <section className="container px-5 py-3 mx-auto md:py-8">
      <SectionTitle hading="Popular Classes" />
      <div>
        {loading ? (
          <div className="py-5 md:py-8">
            <CardLoading />
          </div>
        ) : (
          <div className="grid gap-5 py-5 md:py-8 md:grid-cols-2 lg:grid-cols-3">
            {classes?.map((item) => (
              <ClassesCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
      {totalPopularClasses > 6 && (
        <div className={`pt-4 text-center ${classes.length > 6 && "hidden"}`}>
          <Button
            onClick={onAllCourse}
            variant={"primary"}
            className="px-8 py-3 text-base sm:px-20 md:text-xl"
          >
            See All Course
          </Button>
        </div>
      )}
    </section>
  );
};

export default PopularClasses;
