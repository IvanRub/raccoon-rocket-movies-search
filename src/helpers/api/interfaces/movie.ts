export type TMovieExternalId = {
    tmdb?: number,
    imdb?: string | null,
}

export type TMovieUrl = {
    url?: string,
    previewUrl?: string,
}

export type TMovieLogo = {
    _id?: string,
    url?: string | null,
}

export type TMoviePoster = TMovieUrl

export type TMovieBackdrop = TMovieUrl

export type TMovieRating = {
    tmdb?: number,
    kp?: number,
    imdb?: number,
}

export type TMovieVotes = {
    tmdb?: number,
    kp?: number,
    imdb?: number,
}

export type TMovieVideo = {
    _id: string,
    url?: string,
    name?: string,
    site?: string,
    size?: number,
    type?: string,
}

export type TMovieVideos = {
    trailers?: TMovieVideo[],
    teasers?: TMovieVideo[],
}

export type TMovieBudget = {
    value: number,
    currency: string
}

export type TMovieFee = {
    value?: number,
    currency?: string
}

export type TMovieFees = {
    [key: string]: TMovieFee,
}

export type TMovieDistributors = {
    distributor?: string,
    distributorRelease?: string,
}

export type TMoviePremiere = {[key: string]: string};

export type TMovieImages = {
    postersCount?: number,
    backdropsCount?: number,
    framesCount?: number,
}

export type TMovieProductionCompany = {
    name: string,
} & TMovieUrl

export type TMovieSpokenLanguage = {
    name?: string,
    nameEn?: string,
}

export type TMovieFact = {
    value: string,
}

export type TMovieGenre = {
    name: string,
}

export type TMovieCountry = {
    name: string,
}

export type TMoviePerson = {
    id: number,
    name: string,
    enName?: string,
    photo?: string,
    enProfession?: string,
}

export interface IMovie {
    id: number,
    externalId?: TMovieExternalId,
    logo?: TMovieLogo,
    type: string,
    name: string,
    description?: string | null,
    slogan?: string,
    year?: number,
    poster?: TMoviePoster,
    backdrop?: TMovieBackdrop,
    rating?: TMovieRating,
    votes?: TMovieVotes,
    videos?: TMovieVideos,
    budget?: TMovieBudget,
    fees?: TMovieFees,
    distributors?: TMovieDistributors,
    premiere?: TMoviePremiere,
    images?: TMovieImages,
    status?: string,
    movieLength?: number | null,
    productionCompanies?: TMovieProductionCompany[],
    spokenLanguages?: TMovieSpokenLanguage[],
    facts?: TMovieFact[],
    genres?: TMovieGenre[],
    countries?: TMovieCountry[],
    persons?: TMoviePerson[],
}