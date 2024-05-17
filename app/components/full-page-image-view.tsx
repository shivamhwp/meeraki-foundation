export default async function FullPageImageView(props: { id: number }) {
  // const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0  ">
      <div className="flex flex-shrink items-center justify-center "></div>
      <div className="flex w-48  flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg"></div>
        <div className="flex flex-col p-2">
          {/* <span>uploaded by : </span> */}
          {/* <span>{uplaoderInfo.fullName}</span> */}
        </div>
        <div className="flex flex-col p-2">
          <span>created on :</span>
          {/* <span>{new Date(image.createdAt).toLocaleDateString()}</span> */}
        </div>
        <div className="p-2">
          <form
          // action={async () => {
          //   "use server";

          //   await deleteImage(image.id);
          // }}
          >
            <button type="submit" variant="destructive">
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
